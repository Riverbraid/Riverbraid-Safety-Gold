#!/bin/bash
# Generate SHA256SUMS for critical vectors
sha256sum run-vectors.cjs constitution.threshold.json > SHA256SUMS

# Generate MERKLE_ROOT (Root hash of the current verified state)
# We use the SHA256SUMS file as the leaf set to derive the root
sha256sum SHA256SUMS | cut -d' ' -f1 > MERKLE_ROOT

echo "✅ Integrity artifacts generated: SHA256SUMS and MERKLE_ROOT"
