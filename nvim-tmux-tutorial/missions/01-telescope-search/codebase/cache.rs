// CACHE MANAGER - RUST IMPLEMENTATION
// [TOKEN-GAMMA-3] "Delve into the depths where logs record all"

use std::collections::HashMap;
use std::time::{Duration, SystemTime};

pub struct Cache<K, V> {
    data: HashMap<K, (V, SystemTime)>,
    ttl: Duration,
}

impl<K, V> Cache<K, V>
where
    K: std::hash::Hash + Eq,
{
    pub fn new(ttl_seconds: u64) -> Self {
        Cache {
            data: HashMap::new(),
            ttl: Duration::from_secs(ttl_seconds),
        }
    }

    pub fn get(&self, key: &K) -> Option<&V> {
        self.data.get(key).and_then(|(value, timestamp)| {
            if timestamp.elapsed().ok()? < self.ttl {
                Some(value)
            } else {
                None
            }
        })
    }

    pub fn set(&mut self, key: K, value: V) {
        self.data.insert(key, (value, SystemTime::now()));
    }
}