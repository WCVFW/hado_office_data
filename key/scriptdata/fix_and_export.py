import pandas as pd
import re

# File paths
main_excel = r'E:\office\key\scriptdata\ChennaiBankAuctions_DB_Ready.xlsx'
backup_csv = r'E:\office\key\scriptdata\chennaibankauction_project\ChennaiBankAuction_BACKUP.csv'
output_excel = r'E:\office\key\scriptdata\ID_and_Description.xlsx'

print("Loading Data...")
try:
    df_main = pd.read_excel(main_excel)
except Exception as e:
    print(f"Error loading main excel: {e}. Please ensure you have restored the uncorrupted file!")
    exit(1)

df_backup = pd.read_csv(backup_csv, low_memory=False)

# Convert IDs to string for reliable matching
df_main['Post ID'] = df_main['Post ID'].astype(str).str.replace('.0', '', regex=False)
df_backup['ID'] = df_backup['ID'].astype(str).str.replace('.0', '', regex=False)

# Create a mapping from the Backup CSV
print("Mapping Borrower Name and Description from Backup...")
borrower_map = df_backup.set_index('ID')['Borrower Name'].to_dict()

# Use full_description if available, else fallback to short_note
desc_full = df_backup.set_index('ID').get('ACF: full_description_', pd.Series()).to_dict()
desc_short = df_backup.set_index('ID').get('ACF: short_note', pd.Series()).to_dict()

desc_map = {}
for pid in df_backup['ID'].unique():
    full = desc_full.get(pid)
    short = desc_short.get(pid)
    
    final_desc = ""
    if pd.notna(full) and str(full).strip() != "":
        final_desc = str(full).strip()
    elif pd.notna(short) and str(short).strip() != "":
        final_desc = str(short).strip()
        
    desc_map[pid] = final_desc

# Illegal character cleaner to prevent Excel corruption
def clean_for_excel(value):
    if isinstance(value, str):
        ILLEGAL_CHARACTERS_RE = re.compile(r'[\000-\010]|[\013-\014]|[\016-\037]')
        return ILLEGAL_CHARACTERS_RE.sub('', value)
    return value

fixed_borrowers = 0
fixed_descriptions = 0

# Fix the Main Dataframe
for idx, row in df_main.iterrows():
    pid = str(row.get('Post ID', ''))
    
    # Fix Borrower Name
    if pd.isna(row.get('Borrower Name')) or str(row.get('Borrower Name')).strip() == '':
        if pid in borrower_map and not pd.isna(borrower_map[pid]):
            df_main.at[idx, 'Borrower Name'] = clean_for_excel(borrower_map[pid])
            fixed_borrowers += 1
            
    # Fix Description
    if pd.isna(row.get('Description')) or str(row.get('Description')).strip() == '':
        if pid in desc_map and not pd.isna(desc_map[pid]):
            df_main.at[idx, 'Description'] = clean_for_excel(desc_map[pid])
            fixed_descriptions += 1

print(f"Fixed {fixed_borrowers} missing Borrower Names!")
print(f"Fixed {fixed_descriptions} missing Descriptions!")

# Ensure ID column exists
if 'ID' not in df_main.columns:
    df_main.insert(0, 'ID', ['PROP' + str(1000 + i) for i in range(len(df_main))])

# 1. Save the completely fixed Master Excel
print("Saving fixed ChennaiBankAuctions_DB_Ready.xlsx...")
df_main.to_excel(main_excel, index=False)

# 2. Export ONLY ID and Description to a separate Excel file
print(f"Exporting ID and Description to {output_excel}...")
df_export = df_main[['ID', 'Description']].copy()
df_export.to_excel(output_excel, index=False)

print("Done! Both files are completely ready!")
