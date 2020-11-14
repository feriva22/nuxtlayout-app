export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (typeof(store.state) !== undefined  && !store.state.authenticated) {
      return redirect('/login')
    }
  }