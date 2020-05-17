import * as functions from 'firebase-functions';
import * as _ from 'lodash';
import * as requestp from 'request-promise';
// import * as cors from 'cors';


export const uniQuery = functions.https.onRequest((req, res) => {
    // for local testing 
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        res.end();
    }
    console.log(req.body)
    const elasticSearchConfig = functions.config().elasticsearch;
    const elasticSearchUrl = elasticSearchConfig.url + '/soc-index/_search?size=7000';
    const elasticsearchRequest = {
        method: 'GET',
        uri: elasticSearchUrl,
        auth: {
            username: elasticSearchConfig.username,
            password: elasticSearchConfig.password,
        },
        body: {
                "query": {
                    "query_string": {
                        "query": req.body.data['uniQuery']
                    }
                }
        },
        json: true
    };

    requestp(elasticsearchRequest).then(response => {
        res.status(200).send({ data: response });
    }).catch(error=>{
        res.status(300).send(error);
    });

});
