import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Questions = new Mongo.Collection('questions');

var QuestionsSchema = new SimpleSchema({
    question: {
        type: String,
        label: "Frage",
        min: 0,
        max: 100
    },
    energietypId: {
        type: String,
        label: "Energietyp",
        min:0
    },
    fokusId:{
        type: String,
        label: "Fokus",
        min:0
    },
    clusterId:{
        type: String,
        label: "Cluster",
        min:0
    }

});

Questions.attachSchema(QuestionsSchema);

Questions.allow({
    insert(userId, question) {
        return Roles.userIsInRole(userId, ["admin"], "default-group");
    },
    update(userId, step, fields, modifier) {
        return Roles.userIsInRole(userId, ["admin"], "default-group");
    },
    remove(userId, step) {
        return Roles.userIsInRole(userId, ["admin"], "default-group");
    }
});