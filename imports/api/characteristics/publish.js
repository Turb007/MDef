/**
 * Created by lukas on 21.10.2016.
 */
import { Meteor } from 'meteor/meteor';

import { Characteristics } from './collection';

if (Meteor.isServer) {
    Meteor.publish('characteristics', function() {
        const selector = {
            // $or: [{
            //     // when logged in user is the owner
            //     $and: [{
            //         owner: this.userId
            //     }, {
            //         owner: {
            //             $exists: true
            //         }
            //     }]
            // }]
        };

        return Characteristics.find(/*selector*/);
    });
}