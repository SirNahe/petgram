import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { Helmet } from 'react-helmet'

export default () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <Helmet>
        <title>Registro | Petgram 🐶 </title>
        <meta
          name='description'
          content='Registráte en Petgram o inicia sesión'
        />
      </Helmet>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }

          const errorMsg =
            error && 'El email ya esta registrado. Intenta con otro.'

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title='Registrarse'
              onSubmit={onSubmit}
            />
          )
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }

          const errorMsg =
            error && 'La contraseña es incorrecta o el usuario no existe.'

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title='Iniciar sesión'
              onSubmit={onSubmit}
            />
          )
        }}
      </LoginMutation>
    </>
  )
}
