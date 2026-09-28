import re

text = open('content-master.js', 'r', encoding='utf-8').read()

output = []
output.append('=============================================================')
output.append('INSTAFINANCIALS - PAYWALL / ORDERING API REQUEST URLs')
output.append('=============================================================\n')
output.append('Indha APIs thaan InstaFinancials-la premium reports (InstaSummary, Contact Details) purchase panna and access panna use aagudhu:\n')

# Find blocks of $.ajax
ajax_blocks = re.split(r'\$\.ajax\s*\(', text)
for i, block in enumerate(ajax_blocks[1:]):
    url_match = re.search(r'url\s*:\s*[\"\']([^\"\']+)[\"\']', block)
    type_match = re.search(r'type\s*:\s*[\"\']([^\"\']+)[\"\']', block)
    data_match = re.search(r'data\s*:\s*([^\,]+)\,', block)
    
    if url_match:
        url = url_match.group(1)
        method = type_match.group(1) if type_match else 'GET/POST'
        data = data_match.group(1).strip() if data_match else 'None'
        
        if '/' in url or '.aspx' in url:
            output.append(f'API Endpoint : {url}')
            output.append(f'HTTP Method  : {method}')
            output.append(f'Payload Data : {data}')
            output.append('-' * 60)

with open('API_Paywall_Details.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(output))

print('Done')
