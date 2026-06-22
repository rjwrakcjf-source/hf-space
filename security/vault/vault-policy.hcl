# Default policy - read access to secrets
path "secret/hf-space/*" {
  capabilities = ["read", "list"]
}

path "secret/hf-space/api-keys/*" {
  capabilities = ["read"]
}
