# Router navigation

## last day:

- React routes

## today:

- Nesting routes
- Redirecting with `useNavigate`
- Redirecting with `Navigate`
- 404

### resources:

- [`useNavigate` hook](https://reactrouter.com/en/main/hooks/use-navigate)
- [`Navigate` component](https://reactrouter.com/en/main/components/navigate)
- [Navigate - `replace`](https://reactrouter.com/en/main/fetch/replace)


### exercises

- Ex1: [37-spa-router-usenavigate](https://classroom.github.com/a/DuBBMS7O)
- Ex2: [38-spa-router-404-redirect](https://classroom.github.com/a/5mpPcR7u)

## Theory

- The "index" Route matches the path with the parent Route
- We can navigate from JS using `useNavigate()`
- We can navigate by rendering `<Navigate ...>`
- We use replace to redirect to the new location using `history.replaceState` instead of `history.pushState`, which deletes the redirection from the history
- Using `path="*"` to catch routes that aren't found