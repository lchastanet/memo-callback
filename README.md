# useMemo and useCallback intro

This a short introduction of memoization in React.

To set up the project :

```shell
$ npm i
```

To run the project :

```shell
$ npm start
```

1. In the first part, in the `BasicMemo` component, we will put the `doSomethingHeavy` function in a memo in order to prevent recalculation of the `value`.

2. In the second part, in the `BasicCallback` component, we will put the `setter` of the state (which is actually a function) in a `useCallback` memo, then pass it as prop to the `BasicCallbackChild` component to avoid rerender of this component when his state do not change (don't forget to export `BasicCallbackChild` in a memo as well).

3. Finally, in the third part, we will put the `values` of the context (`MemoContext`) in a memo, in order to don't rerender the `ContextMemoChild` when the state of is parent (or one of them) is updated (don't forget to export `ContextMemoChild` in a memo as well)

