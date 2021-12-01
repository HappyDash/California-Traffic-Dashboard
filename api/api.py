import time

import cx_Oracle
import sqlalchemy
from sqlalchemy.exc import SQLAlchemyError
# from pandas import pandas as pd
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    conn = cx_Oracle.connect('sankalppandey/Aruba123@oracle.cise.ufl.edu:1521/orcl')
    cur = conn.cursor()

    cur.prefetchrows = 500000
    cur.arraysize = 500000

    row = cur.execute("""
                    select * from victims
                    """)
    row = cur.fetchall()
    return {'time': time.time()}
    # try:
    #     engine = sqlalchemy.create_engine("oracle+cx_oracle://sankalppandey:Aruba123@oracle.cise.ufl.edu:1521/orcl")
    #     orders_sql = """SELECT case_id FROM area""";
    #     df_orders = pd.read_sql(orders_sql, engine)
    #     #    details_sql = """SELECT * FROM details""";
    #     #    df_details = pd.read_sql(details_sql, engine)
    #     print(df_orders)
    #     #    print(df_details)
    #     return {'time': time.time()}
    # except SQLAlchemyError as e:
    #     print(e)

# conn = cx_Oracle.connect('sankalppandey/Aruba123@oracle.cise.ufl.edu:1521/orcl')
# cur = conn.cursor()

# cur.prefetchrows = 500000
# cur.arraysize = 500000

# row = cur.execute("""
#                   select * from victims
#                   """)
# row = cur.fetchall()