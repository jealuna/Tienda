import pandas as pd

def lee_archivo(archivo):
    df = pd.read_excel(archivo)
    df.fillna(0, inplace = True)
    for index, row in df[:1].iterrows():
        for i in range(len(row)):
            if i > 2:
                print(str(row.index[i]) + '-' + str(int(row[i])))
    return df

if __name__ == "__main__":
    df = lee_archivo ('Orden de Compras.xlsx')
