"""
Copyright 2021 Objectiv B.V.
"""
__version__ = '0.0.1'

from bach.dataframe import DataFrame, DataFrameOrSeries, ColumnNames, SortColumn, \
    get_series_type_from_dtype
from bach.series import *

# TODO: check. Do we need to generate docs for this at this point?
from_table = DataFrame.from_table
from_model = DataFrame.from_model
from_pandas = DataFrame.from_pandas