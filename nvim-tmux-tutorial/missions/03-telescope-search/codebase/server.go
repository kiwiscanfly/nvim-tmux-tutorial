// PROJECT PROMETHEUS - GO SERVER MODULE
// RECOVERED FROM: Production infrastructure repository
// LAST MODIFIED: 2022-03-13 (2 days before disappearance)
//
// "Go was her language of choice for backend services. Fast, reliable, boring.
// She said: 'Boring is good in production. Save creativity for algorithms.'"
// - Former colleague
//
// FORENSIC NOTE: This server was deployed to an unknown endpoint the day before
// she vanished. The deployment logs show an IP address that doesn't match any
// known Prometheus infrastructure. Where was she deploying to?
//
// [BETA-3] "Now search for YAML config files"

package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"
)

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