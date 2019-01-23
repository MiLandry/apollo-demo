export const typeDefs = `
  type Query {
    courtCase: CourtCase
  }
  type CourtCase {
    id: Int!
    plaintiff: Person
    defendant: Person
    lawyer: Lawyer
  }
  type Person {
    id: Int!
    firstName: String
    lastName: String
  }
  type Lawyer {
    id: Int!
    firstName: String
    lastName: String
  }
`

export const resolvers = {
  Query: {
    courtCase(parent, args, context, info) {
      // return find(authors, { id: args.id })
      return "fake case data"
    },
  },
  Lawyer: {
    firstName(lawyer) {
      return "Jon"
    },
    lastName(lawyer) {
      return "Snow"
    },
  },
  Person: {
    firstName(person) {
      return "Tirion"
    },
    lastName(person) {
      return "Lannister"
    },
  },
  CourtCase: {
    plaintiff(courtCase) {
      return {}
    },
    defendant(courtCase) {
      return {}
    },
    lawyer(courtCase) {
      // I don't think I need to implement a func
      return {}
    },
  },
}
