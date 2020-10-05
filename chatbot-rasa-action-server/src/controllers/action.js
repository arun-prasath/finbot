'use strict';

class Action {
    constructor() {}

    action(req, res) {
        console.log("Action server controller")
        res.send({
            "events": [
              {
                "event": "slot",
                "timestamp": 1559744410
              }
            ],
            "responses": [
              {
                "text": "Your balance is $50.00"
              }
            ]
          });
    }
}

module.exports = new Action();