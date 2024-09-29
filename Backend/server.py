from flask import Flask, jsonify, request
from pymongo.errors import PyMongoError
from database import db_connection
from bson import ObjectId
import logging

app = Flask(__name__)
app.logger.setLevel(logging.DEBUG)


def convert_objectid_to_str(data):
    if isinstance(data, list):
        return [convert_objectid_to_str(item) for item in data]
    elif isinstance(data, dict):
        return {key: convert_objectid_to_str(value) for key, value in data.items()}
    elif isinstance(data, ObjectId):
        return str(data)
    return data


@app.route("/generateReport", methods=["GET"])
def get_members():
    email = request.args.get("email", None)
    if not email:
        return jsonify({"error": "Email query parameter is required"}), 400

    app.logger.debug(f"generateReport called for email={email}")

    try:
        collection = db_connection.get_collection("user_organization_details")
        cursor = collection.find({"emailId": email}).sort("_id", -1).limit(1)
        latest_data = list(cursor)
        latest_data = convert_objectid_to_str(latest_data)

    except PyMongoError as pe:
        app.logger.error(f"MongoDB error: {pe}", exc_info=True)
        return jsonify({"error": "Database error"}), 500
    except Exception as e:
        app.logger.error(f"Unexpected error: {e}", exc_info=True)
        return jsonify({"error": "Internal server error"}), 500

    return jsonify(latest_data), 200


if __name__ == "__main__":
    app.run(debug=True)
