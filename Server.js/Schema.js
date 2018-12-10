const graphql = require('graphql')
const _ = require('lodash')
const MCollection =require('./Modal/CollectionMongoose')
const {GraphQLObjectType, GraphQLString,GraphQLID,GraphQLSchema, GraphQLList} = graphql

var Collection =[{id:'1',name:'Hacker',company:'local'},
{id:'2',name:'Chacker',company:'local'},
{id:'3',name:'Packer',company:'local'},
{id:'4',name:'Tracker',company:'local'},
{id:'5',name:'Dell',company:'local'},
{id:'6',name:'Hp',company:'local'},
]


const CollectionData = new GraphQLObjectType({
    name: 'Stock',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        company:{type:GraphQLString}
    })

});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        store:{
            type:CollectionData,
       args:{ id:{type:GraphQLID}},
      resolve(parent,args){
         return _.find(Collection,{id:args.id})
      }
    },
    storeStock:{
        type: new GraphQLList(CollectionData),
        resolve(parent,args){
            return Collection
         }

    },
    storeStockDB:{
        type: new GraphQLList(CollectionData),
        resolve(parent,args){
            return MCollection.find({});
         }

    },
}
});
const MongooseCollection = new GraphQLObjectType({
    name: 'MongooseDB',
    fields:{
        store:{
            type:CollectionData,
       args:{
            id:{type:GraphQLID},
            name:{type:GraphQLString},
            company:{type:GraphQLString}
        },
      resolve(parent,args){
        let mcollect = new MCollection({
            id:args.id,
            name:args.name,
            company:args.company
        });
        return mcollect.save();
      }
    }
}
});
module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:MongooseCollection
})