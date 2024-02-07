import { redirect } from 'next/navigation'
import { getSession, login, logout } from '../../lib'

export default async function Home() {
  const session = await getSession()
  return (
    <main className='flex min-h-screen flex-col p-24'>
      <form
        action={async (formData) => {
          'use server'
          await login(formData)
          redirect('/')
        }}
      >
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
          className='border border-solid border-black p-2 rounded-md'
        />
        <br />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          className='border border-solid border-black p-2 rounded-md'
        />
        <br />
        <button
          type='submit'
          className='border-1 border-solid bg-blue-500 text-white rounded-md px-4 py-2'
        >
          Login
        </button>
      </form>

      <form
        action={async () => {
          'use server'
          await logout()
          redirect('/')
        }}
      >
        <button
          type='submit'
          className='border-1 border-solid bg-red-500 text-white rounded-md px-4 py-2'
        >
          Logout
        </button>
      </form>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  )
}
