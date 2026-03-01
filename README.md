# Riverbraid-Safety-Gold

**Signal:** `ENTROPY_SCAN`  
**Cluster:** [Riverbraid Gold v1.1](https://github.com/Riverbraid/Riverbraid-Golds)  
**Language:** Python ≥ 3.10  
**Status:** Active — Stationary

-----

## What It Is

Riverbraid-Safety-Gold is the **entropy scanning petal** of the Riverbraid Gold Cluster. It is responsible for real-time protocol integrity checks — detecting frequency distortion, illicit entropy, and “AI-Generic” signal degradation before a payload reaches downstream systems.

Its core invariant is `ALIGNMENT_FILTER`: any payload containing markers of generic, low-coherence, or distorted output is flagged and blocked. It does not interpret content. It scans for structural and signal-level violations.

-----

## What It Is Not

- Not a content moderation or semantic classification layer
- Not a moral filter — it detects signal distortion, not intent
- Not adaptive — scan rules are defined in `protocol.steps`, not inferred
- Not responsible for acting on scan results — that belongs to the wrapper layer

-----

## How It Works

Safety-Gold scans an incoming payload against a set of structural integrity rules derived from its protocol definition. A payload that passes returns a clean result. A payload that fails is flagged with the specific distortion pattern detected.

“AI-Generic” distortion refers to patterns of output that have drifted from coherent, signal-rich communication into generic, high-token, low-meaning noise — the kind of degradation that indicates the system is no longer operating from a stable internal frequency.

The scan is deterministic. The same payload against the same protocol always produces the same result.

-----

## Usage

```python
from safety import scan, is_clean

payload = {
    "content": "...",
    "token_volume": 0.8,
    "unique_meaning": 0.3
}

# Full scan result
result = scan(payload)
# result["clean"] → True or False
# result["flags"] → list of detected distortion patterns
# result["signal"] → "ENTROPY_SCAN"

# Simple boolean check
if is_clean(payload):
    # proceed
    pass
```

**Verify from the command line:**

```bash
python verify.py
# Output: [Signal: ENTROPY_SCAN | Braid: CLOSED-LOOP]
```

-----

## Files

|File            |Purpose                                                      |
|----------------|-------------------------------------------------------------|
|`safety.py`     |Core entropy scanning logic                                  |
|`__init__.py`   |Public API surface                                           |
|`verify.py`     |Fail-closed verification entry point                         |
|`protocol.steps`|Canonical protocol and scan rule definitions (data, not code)|

-----

## Design Properties

- **Deterministic** — same payload and protocol always produce the same scan result
- **Signal-level** — scans for structural distortion, not semantic meaning
- **Fail-closed** — scan errors return a flagged result, never a clean pass
- **Upstream gate** — Safety-Gold runs before downstream petals, not after
- **Standard library only** — no dependencies

-----

## Part of the Riverbraid Gold Cluster

|Petal                                                                                   |Signal                   |Purpose                      |
|----------------------------------------------------------------------------------------|-------------------------|-----------------------------|
|[Riverbraid-Golds](https://github.com/Riverbraid/Riverbraid-Golds)                      |—                        |Cluster manifest and pipeline|
|[Riverbraid-Core](https://github.com/Riverbraid/Riverbraid-Core)                        |Root                     |Capacity control substrate   |
|[Riverbraid-Crypto-Gold](https://github.com/Riverbraid/Riverbraid-Crypto-Gold)          |`MECHANICAL_HONESTY`     |SHA-256 state anchoring      |
|[Riverbraid-Judicial-Gold](https://github.com/Riverbraid/Riverbraid-Judicial-Gold)      |`LEAST_ENTROPY`          |Predicate governance         |
|[Riverbraid-Refusal-Gold](https://github.com/Riverbraid/Riverbraid-Refusal-Gold)        |`BOUNDARY_LOGIC`         |Boundary enforcement         |
|[Riverbraid-Memory-Gold](https://github.com/Riverbraid/Riverbraid-Memory-Gold)          |`MEANING_CENTRIC`        |Meaning-centric persistence  |
|[Riverbraid-Integration-Gold](https://github.com/Riverbraid/Riverbraid-Integration-Gold)|`SEMANTIC_BRIDGE`        |Mode enactment               |
|[Riverbraid-Harness-Gold](https://github.com/Riverbraid/Riverbraid-Harness-Gold)        |`STATIONARY_STATE_ACTIVE`|Cluster verification harness |

-----

## License

See `LICENSE`.
