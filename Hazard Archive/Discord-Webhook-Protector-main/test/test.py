# >>> For testing

import requests
from pyotp import TOTP

# the api endpoint that you want tomake a request to
# change to your heroku api endpoint or http://localhost:3000 if ur testing locally
api_uri = "http://localhost:3000"

# needs to be same key as the one in your api
pass32 = 'K4ZVUQTSIRMDOWKRGU2WQQTZJM======'
key = TOTP(pass32).now()
embed = {
    'content': 'It works!',
    'embeds': [
        {
            'description': '🌟・https://github.com/Rdimo/Discord-Webhook-Protector'
        }
    ]
}

with open(__file__, 'rb') as f:
    r = requests.post(api_uri,
        headers={"Authorization": key}, 
        json=embed
    )
    r2 = requests.post(api_uri,
        headers={"Authorization": key}, 
        files={'upload_file': f}
    )

print(r.text, r.status_code)
print(r2.text, r2.status_code)
