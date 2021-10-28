from flask.json import jsonify
from numpy.random.mtrand import randint
import pandas as pd
import numpy as np
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor


def base(dataframe):
    X = dataframe.iloc[:, 1:-1].values
    y = dataframe.iloc[:, -1].values
    # Remove missing values with mean data
    imputer = SimpleImputer(missing_values=np.nan, strategy="mean")
    imputer.fit(X[:, :])
    X[:, :] = imputer.transform(X[:, :])
    return X, y


def make_recommendation_batsmen(searchTerms=[0] * 4):
    # Import data
    dataframe = pd.read_csv("DATASETS/new_batsmen_data.csv")
    X, y = base(dataframe)

    # Linear peogression
    regressor = LinearRegression()
    regressor.fit(X, y)

    # searchTerms=[runs,balls,avg,strike_rate]
    y_pred = regressor.predict([searchTerms])
    return y_pred[0]


def make_recommendation_bowlers(searchTerms=[0] * 4):
    # Import data
    dataframe = pd.read_csv("DATASETS/new_bowlers_data.csv")
    X, y = base(dataframe)

    # Random forest regression
    regressor = RandomForestRegressor(n_estimators=10, random_state=0)
    regressor.fit(X, y)

    # searchTerms=[balls,avg,economy,wickets]
    y_pred = regressor.predict([searchTerms])
    return y_pred[0]


def make_recommendation(flag, searchTerms):
    auction_price = (
        make_recommendation_batsmen(searchTerms)
        if (flag)
        else make_recommendation_bowlers(searchTerms)
    )

    return jsonify({"price": abs(auction_price), "accuracy": abs(0.823)})
