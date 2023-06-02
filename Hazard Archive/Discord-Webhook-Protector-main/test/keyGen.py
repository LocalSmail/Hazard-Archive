from secrets import token_bytes
from base64 import b32encode
from pyperclip import copy

KEY_LENGTH = 10

key = b32encode(token_bytes(KEY_LENGTH)).decode()

print(f'\nYour key is: {key}\nCopied key to clipboard!\n')
copy(key)
