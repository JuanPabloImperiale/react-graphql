import {useQuery, useMutation, useLazyQuery} from '@apollo/client'
import {ALL_PERSONS, FIND_PERSON} from './graphql-queries'
import {CREATE_PERSON} from './graphql-mutations'

export const usePersons = () =>{
    const result = useQuery(ALL_PERSONS)
    return result 
}

export const useAddPerson = () => {
    const [createPerson] = useMutation(CREATE_PERSON, {
        refetchQueries: [{ query: ALL_PERSONS}]
    })
    return createPerson

}

export const useFindPerson = () =>{
    const [getPerson, result] = useLazyQuery(FIND_PERSON);
    return {getPerson, result}



}