
import * as Yup from 'yup'

const ClienteValidator = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório!'),
    email: Yup.string().email().required('Campo obrigatório!'),
    cpf: Yup.string().required('Campo obrigatório!'),
    cef: Yup.string().required('Campo obrigatório!'),
    bairro: Yup.string().required('Campo obrigatório!'),
})

export {ClienteValidator}