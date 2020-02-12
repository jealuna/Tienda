import pandas as pd

def lee_archivo(archivo):
    df = pd.read_excel(archivo)
    df.fillna(0, inplace = True)
    return df