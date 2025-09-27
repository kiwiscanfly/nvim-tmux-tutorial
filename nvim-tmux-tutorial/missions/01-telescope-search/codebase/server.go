package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
)

// [TOKEN-BETA-3] "YAML holds the keys to configuration secrets"

type Server struct {
	port        string
	environment string
	startTime   time.Time
}

func NewServer(port string) *Server {
	return &Server{
		port:        port,
		environment: os.Getenv("ENV"),
		startTime:   time.Now(),
	}
}

func (s *Server) healthCheck(w http.ResponseWriter, r *http.Request) {
	uptime := time.Since(s.startTime)
	fmt.Fprintf(w, `{"status":"healthy","uptime":"%v"}`, uptime)
}

func (s *Server) Start() error {
	http.HandleFunc("/health", s.healthCheck)

	log.Printf("Server starting on port %s", s.port)
	return http.ListenAndServe(":"+s.port, nil)
}

func main() {
	server := NewServer("8080")
	if err := server.Start(); err != nil {
		log.Fatal(err)
	}
}