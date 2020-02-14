import pandas as pd

def lee_archivo(archivo):
    df = pd.read_excel(archivo)
    df.fillna(0, inplace = True)
    return df

if __name__ == "__main__":
    df = lee_archivo ('Orden de Compras.xlsx')
