---
title: Caddy DeSec ceritificate error
date: "2024-03-19"
cta: "react"
excerpt: Fix for "Could not determine authoritative server" when trying to get/renew certificate using DeSec token
---

When trying to get/renew certificate using caddy you might sometime run into error "checking DNS propagation of \"\_acme-challenge.xxxxxxx.dedyn.io\": could not determine authoritative nameservers", I was able to solve it by setting resolvers per site at the tls level to cloudflare's dns

Example:

```json
xxxxxxx.dedyn.io {
    tls {
    resolvers 1.1.1.1
    }
# site level config
}

```
