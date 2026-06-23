from typing import List, Dict

AVAILABLE_MODELS = [
    {"name": "gpt2", "type": "text-generation", "size": "117M", "license": "MIT"},
    {"name": "distilgpt2", "type": "text-generation", "size": "82M", "license": "Apache-2.0"},
    {"name": "EleutherAI/gpt-neo-125M", "type": "text-generation", "size": "125M", "license": "MIT"},
]

def list_models() -> List[Dict]:
    """Return list of available models."""
    return AVAILABLE_MODELS
