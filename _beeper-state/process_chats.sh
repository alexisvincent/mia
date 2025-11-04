#!/bin/bash

# Process remaining Beeper chats into state files
# This script will be run by Claude to generate all chat state files

CHATS_DIR="/Users/alexisvincent/Code/k42/mia/beeper-state/chats"

# Chat mappings: chatID → filename (without .json)
declare -A CHAT_MAP=(
    ["!RBN213jd7644xLu37NaSwq0tO5s:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost"]="alexis-vincent-with-viktoria"
    ["!KOiYweuwSkbAcIVSHqo0O-t62Dc:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost"]="14152126297"
    ["!4nnWc370QApRE9WkeqW6l8eL3x4:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost"]="gabi-immelman"
    ["!zJsSJ3crkFlZ41vj-G4gYGMVsII:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost"]="grant-gordon"
    ["!y3nSiwiZyzJZnfhLQP9nMMDz9Pw:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost"]="zara-gabryel"
    ["!2vj-uU2n0kt83h6Mvwn4tbRAVhk:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost"]="skydiving"
    ["!uD-fPSK8UdqCXyqHgaCl9Jxzr4s:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost"]="saffas-in-sf"
    ["!65ky20ZvHphHDgGXakQmFhPpMR8:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost"]="annija-eizenarma"
    ["!RGUZV6_yBwc6Jf6TyI82iHPwtc8:ba_BdxJfgTbM_kfnV0wpXpiPilSZMc.local-linkedin.localhost"]="florian-scherl"
    ["!BYeVnJ6p_052g1G6K2eHCx5auXY:ba_9jZcvPl73rIpeUYoInC8nfTQwLw.local-whatsapp.localhost"]="piyush-varanjani"
)

echo "Starting batch chat processing..."
echo "Total chats to process: ${#CHAT_MAP[@]}"

for chat_id in "${!CHAT_MAP[@]}"; do
    filename="${CHAT_MAP[$chat_id]}.json"
    echo "Processing: $filename"
done

echo "Complete!"
