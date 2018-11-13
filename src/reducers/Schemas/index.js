import  { schema } from 'normalizr'

export const songSchema = new schema.Entity('songs', {}, {
  processStrategy: (value) => {
    delete value.description
    return {
      ...value,
      favorite: false
    }
  }
})




