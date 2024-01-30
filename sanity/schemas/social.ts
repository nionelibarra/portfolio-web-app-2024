import { defineType } from 'sanity';

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name:"title",
      title:"Title",
      description:"Platform for social Media",
      type:"string",
    },  
    {
      name:"url",
      title:"url",     
      type:"url",
    },    
  ],
});
