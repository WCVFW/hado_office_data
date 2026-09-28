import pandas as pd
import numpy as np

file_path = r'E:\office\key\scriptdata\ChennaiBankAuctions_DB_Ready.xlsx'

print("Loading Excel file...")
df = pd.read_excel(file_path)

# Check missing descriptions
missing_desc_mask = df['Description'].isna() | (df['Description'] == '')
missing_count = missing_desc_mask.sum()
print(f"Found {missing_count} rows with missing Description.")

# Fill missing descriptions
def generate_description(row):
    title = str(row.get('Title', ''))
    bank = str(row.get('Bank Name', ''))
    city = str(row.get('City', ''))
    prop_type = str(row.get('Property Type', ''))
    
    desc = f"Auction for {prop_type} by {bank} located in {city}."
    if title and title.lower() != 'nan':
        desc = title + " - " + desc
    return desc

df.loc[missing_desc_mask, 'Description'] = df[missing_desc_mask].apply(generate_description, axis=1)

# Ensure ID column exists
if 'ID' not in df.columns and 'id' not in df.columns:
    print("Generating new ID column...")
    # Add ID as the first column
    df.insert(0, 'ID', ['PROP' + str(1000 + i) for i in range(len(df))])
else:
    print("ID column already exists.")

print("Saving fixed Excel file...")
df.to_excel(file_path, index=False)
print("Done! Fixed Excel file saved successfully.")
