export default function LeftQuestion() {
  return (
    <div>
      <style jsx>
        {`
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTcwIiBoZWlnaHQ9IjI0OCIgdmlld0JveD0iMCAwIDE3MCAyNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNjQxMSAzMC42NjcxVjMyLjQ4N0MxMC42MTA4IDMyLjc5NzIgMTAuNzIyMyAzMy4xMDQ1IDEwLjk0NDUgMzMuMzIzMUMxMS4xNjY3IDMzLjU0MTcgMTEuNDc1OSAzMy42NDgxIDExLjc4NTYgMzMuNjEyN0gxOC45NzEyQzE5LjI4NDUgMzMuNjQ5MiAxOS41OTc0IDMzLjU0MDQgMTkuODIwNCAzMy4zMTc0QzIwLjA0MzQgMzMuMDk0MyAyMC4xNTIyIDMyLjc4MTUgMjAuMTE1NyAzMi40NjgyVjMxLjI1NUMyMC4xMTU3IDI4LjY0NDggMjIuMzAwNSAyNy4xMzI3IDI0LjgxMSAyNS4zOTUxQzI4LjIwMTMgMjMuMDQ4NyAzMi4xODU2IDIwLjI5MTEgMzIuMTg1NiAxMy44NjNDMzIuMTg1NiA1Ljk4OTQ2IDI2LjE4MTkgMC43Mjk5OCAxNi44ODI1IDAuNzI5OThDNy4zNzY2MiAwLjcyOTk4IDAuOTEwMTU2IDYuMzU4NDMgMC45MTAxNTYgMTQuNDg4NFYxNS4yMzI2QzAuOTEwMTU2IDE1LjcwMTcgMS4zNzkxOSAxNi4wMzk0IDIuMDU0NjEgMTYuMDM5NEw5LjI2NTI4IDE2LjMwODNDMTAuMDA5NSAxNi4zMDgzIDEwLjQwOTcgMTUuOTcwNiAxMC40MDk3IDE1LjIzMjZWMTQuNDg4NEMxMC40MDk3IDExLjUyNDEgMTIuODE3NSA5LjQzNTMyIDE2LjY2MzYgOS40MzUzMkMyMC4xNjU3IDkuNDM1MzIgMjIuNTIzNCAxMS4zMTc3IDIyLjUyMzQgMTQuMjE5NUMyMi41MjM0IDE3LjI3MjUgMjAuMDM2MSAxOS4wMTEyIDE3LjMzNzUgMjAuODk3NUMxNC4xMzc4IDIzLjEzNDEgMTAuNjQxMSAyNS41NzgzIDEwLjY0MTEgMzAuNjY3MVpNMTUuODA2OCAzNy45NDY2QzEyLjY0MjQgMzcuOTQ2NiAxMC4wMTU3IDQwLjM3MyAxMC4wMTU3IDQzLjMzNzRIMTAuMDM0NUMxMC4xMzMyIDQ2LjM5NzkgMTIuNjgzMSA0OC44MDU0IDE1Ljc0NDMgNDguNzI4MkMxOC44Mzk5IDQ4LjcyODIgMjEuNTQxNiA0Ni4zMDE3IDIxLjU0MTYgNDMuMzM3NEMyMS41NDE2IDQwLjM3MyAxOC44Mzk5IDM3Ljk0NjYgMTUuODA2OCAzNy45NDY2WiIgZmlsbD0iI0FEQzdGNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYxLjY0MTEgMjI5LjY2N1YyMzEuNDg3QzYxLjYxMDggMjMxLjc5NyA2MS43MjIzIDIzMi4xMDUgNjEuOTQ0NSAyMzIuMzIzQzYyLjE2NjcgMjMyLjU0MiA2Mi40NzU5IDIzMi42NDggNjIuNzg1NiAyMzIuNjEzSDY5Ljk3MTJDNzAuMjg0NSAyMzIuNjQ5IDcwLjU5NzQgMjMyLjU0IDcwLjgyMDQgMjMyLjMxN0M3MS4wNDM0IDIzMi4wOTQgNzEuMTUyMiAyMzEuNzgyIDcxLjExNTcgMjMxLjQ2OFYyMzAuMjU1QzcxLjExNTcgMjI3LjY0NSA3My4zMDA1IDIyNi4xMzMgNzUuODExIDIyNC4zOTVDNzkuMjAxMyAyMjIuMDQ5IDgzLjE4NTYgMjE5LjI5MSA4My4xODU2IDIxMi44NjNDODMuMTg1NiAyMDQuOTg5IDc3LjE4MTkgMTk5LjczIDY3Ljg4MjUgMTk5LjczQzU4LjM3NjYgMTk5LjczIDUxLjkxMDIgMjA1LjM1OCA1MS45MTAyIDIxMy40ODhWMjE0LjIzM0M1MS45MTAyIDIxNC43MDIgNTIuMzc5MiAyMTUuMDM5IDUzLjA1NDYgMjE1LjAzOUw2MC4yNjUzIDIxNS4zMDhDNjEuMDA5NSAyMTUuMzA4IDYxLjQwOTcgMjE0Ljk3MSA2MS40MDk3IDIxNC4yMzNWMjEzLjQ4OEM2MS40MDk3IDIxMC41MjQgNjMuODE3NSAyMDguNDM1IDY3LjY2MzYgMjA4LjQzNUM3MS4xNjU3IDIwOC40MzUgNzMuNTIzNCAyMTAuMzE4IDczLjUyMzQgMjEzLjIyQzczLjUyMzQgMjE2LjI3MyA3MS4wMzYxIDIxOC4wMTEgNjguMzM3NSAyMTkuODk3QzY1LjEzNzggMjIyLjEzNCA2MS42NDExIDIyNC41NzggNjEuNjQxMSAyMjkuNjY3Wk02Ni44MDY4IDIzNi45NDdDNjMuNjQyNCAyMzYuOTQ3IDYxLjAxNTcgMjM5LjM3MyA2MS4wMTU3IDI0Mi4zMzdINjEuMDM0NUM2MS4xMzMyIDI0NS4zOTggNjMuNjgzMSAyNDcuODA1IDY2Ljc0NDMgMjQ3LjcyOEM2OS44Mzk5IDI0Ny43MjggNzIuNTQxNiAyNDUuMzAyIDcyLjU0MTYgMjQyLjMzN0M3Mi41NDE2IDIzOS4zNzMgNjkuODM5OSAyMzYuOTQ3IDY2LjgwNjggMjM2Ljk0N1oiIGZpbGw9IiNBREM3RjciLz4KPHBhdGggZD0iTTEzNC41NDMgMTI5Ljk1TDEzNS4wMzkgMTMwLjAwOUwxMzUuMDQzIDEyOS45OFYxMjkuOTVIMTM0LjU0M1pNMTMyLjI1NiAxMDQuMzMzTDEzMi4yMzggMTA0LjgzMkwxMzIuMjQ3IDEwNC44MzNIMTMyLjI1NlYxMDQuMzMzWk0xMjAuODQgMTAzLjkxM0wxMjAuODU4IDEwMy40MTNMMTIwLjg0OSAxMDMuNDEzSDEyMC44NFYxMDMuOTEzWk0xNDkuNDQzIDEyOS45NUgxNDguOTQzVjEyOS45OEwxNDguOTQ3IDEzMC4wMTFMMTQ5LjQ0MyAxMjkuOTVaTTE0Ny42MjMgMTMxLjc2OUwxNDcuNjg0IDEzMS4yNzNMMTQ3LjY1NCAxMzEuMjY5SDE0Ny42MjNWMTMxLjc2OVpNMTM2LjMzMSAxMzEuNzY5VjEzMS4yNjlIMTM2LjMwNkwxMzYuMjggMTMxLjI3MkwxMzYuMzMxIDEzMS43NjlaTTEzMy41NzggMTQ3LjEzN1YxNDcuNjM3SDEzNC4xMTNMMTM0LjA3NyAxNDcuMTAzTDEzMy41NzggMTQ3LjEzN1pNMTQyLjY2MiAxNTUuNjc1TDE0Mi42NjQgMTU1LjE3NUwxNDIuNjU1IDE1NS4xNzVMMTQyLjY0NiAxNTUuMTc2TDE0Mi42NjIgMTU1LjY3NVpNMTMzLjU0NyAxNDcuMTM3VjE0Ni42MzdIMTMzLjAzTDEzMy4wNDcgMTQ3LjE1M0wxMzMuNTQ3IDE0Ny4xMzdaTTEzNS4wNDMgMTI5Ljk1VjEyNy4wNzJIMTM0LjA0M1YxMjkuOTVIMTM1LjA0M1pNMTM1LjA0MyAxMjcuMDcyQzEzNS4wNDMgMTE5LjkyMyAxMzkuNTM3IDExNi4xODYgMTQ0LjIyNyAxMTIuODU2QzE0Ni41NDggMTExLjIwNyAxNDguOTUgMTA5LjYzNyAxNTAuNzUxIDEwNy44MThDMTUyLjU3MiAxMDUuOTc5IDE1My44MzEgMTAzLjgzNyAxNTMuODMxIDEwMS4wMkgxNTIuODMxQzE1Mi44MzEgMTAzLjQ5MSAxNTEuNzQzIDEwNS4zOTUgMTUwLjA0IDEwNy4xMTRDMTQ4LjMxOSAxMDguODUzIDE0Ni4wMjMgMTEwLjM1MyAxNDMuNjQ3IDExMi4wNEMxMzguOTQyIDExNS4zODIgMTM0LjA0MyAxMTkuMzgzIDEzNC4wNDMgMTI3LjA3MkgxMzUuMDQzWk0xNTMuODMxIDEwMS4wMkMxNTMuODMxIDk4LjU3NzUgMTUyLjgzMiA5Ni41Mzk5IDE1MS4wNzkgOTUuMTIzQzE0OS4zMzcgOTMuNzE0MiAxNDYuODgzIDkyLjk0NTIgMTQzLjk5OSA5Mi45NDUyVjkzLjk0NTJDMTQ2LjcxNCA5My45NDUyIDE0OC45MjcgOTQuNjY5MyAxNTAuNDUxIDk1LjkwMDdDMTUxLjk2NCA5Ny4xMjQyIDE1Mi44MzEgOTguODczOCAxNTIuODMxIDEwMS4wMkgxNTMuODMxWk0xNDMuOTk5IDkyLjk0NTJDMTQwLjg3MSA5Mi45NDUyIDEzOC4yNjkgOTMuNzk3NCAxMzYuNDM5IDk1LjMwMjdDMTM0LjYwMiA5Ni44MTQ0IDEzMy41NzYgOTguOTU5NCAxMzMuNTc2IDEwMS40NTVIMTM0LjU3NkMxMzQuNTc2IDk5LjI1NDEgMTM1LjQ3MSA5Ny4zOTQgMTM3LjA3NSA5Ni4wNzVDMTM4LjY4NiA5NC43NDk0IDE0MS4wNDYgOTMuOTQ1MiAxNDMuOTk5IDkzLjk0NTJWOTIuOTQ1MlpNMTMzLjU3NiAxMDEuNDU1VjEwMi42MjJIMTM0LjU3NlYxMDEuNDU1SDEzMy41NzZaTTEzMy41NzYgMTAyLjYyMkMxMzMuNTc2IDEwMy4xMjYgMTMzLjQ0MiAxMDMuMzk3IDEzMy4yNzMgMTAzLjU1MUMxMzMuMDk0IDEwMy43MTQgMTMyLjc4MyAxMDMuODMzIDEzMi4yNTYgMTAzLjgzM1YxMDQuODMzQzEzMi45MTEgMTA0LjgzMyAxMzMuNTEgMTA0LjY4NyAxMzMuOTQ2IDEwNC4yOUMxMzQuMzkxIDEwMy44ODUgMTM0LjU3NiAxMDMuMyAxMzQuNTc2IDEwMi42MjJIMTMzLjU3NlpNMTMyLjI3NSAxMDMuODMzTDEyMC44NTggMTAzLjQxM0wxMjAuODIxIDEwNC40MTJMMTMyLjIzOCAxMDQuODMyTDEzMi4yNzUgMTAzLjgzM1pNMTIwLjg0IDEwMy40MTNDMTIwLjM4MyAxMDMuNDEzIDEyMC4wMzYgMTAzLjI5NiAxMTkuODE4IDEwMy4xNDFDMTE5LjYwOCAxMDIuOTkgMTE5LjUyIDEwMi44MSAxMTkuNTIgMTAyLjYyMkgxMTguNTJDMTE4LjUyIDEwMy4xOCAxMTguODA1IDEwMy42NDUgMTE5LjIzNyAxMDMuOTU0QzExOS42NjEgMTA0LjI1NyAxMjAuMjI0IDEwNC40MTMgMTIwLjg0IDEwNC40MTNWMTAzLjQxM1pNMTE5LjUyIDEwMi42MjJWMTAxLjQ1NUgxMTguNTJWMTAyLjYyMkgxMTkuNTJaTTExOS41MiAxMDEuNDU1QzExOS41MiA5NS4xNDIyIDEyMi4wMjIgODkuODM4IDEyNi4zNTMgODYuMTA1NEMxMzAuNjkxIDgyLjM2NzcgMTM2Ljg5NCA4MC4xODAyIDE0NC4zMjYgODAuMTgwMlY3OS4xODAyQzEzNi43MDIgNzkuMTgwMiAxMzAuMjUyIDgxLjQyNTQgMTI1LjcwMSA4NS4zNDc5QzEyMS4xNDMgODkuMjc1NSAxMTguNTIgOTQuODU4OSAxMTguNTIgMTAxLjQ1NUgxMTkuNTJaTTE0NC4zMjYgODAuMTgwMkMxNTEuNTk5IDgwLjE4MDIgMTU3LjUyOCA4Mi4yMzQxIDE2MS42MzEgODUuNzgwM0MxNjUuNzI3IDg5LjMyMDUgMTY4LjA0MyA5NC4zODE1IDE2OC4wNDMgMTAwLjQ5MUgxNjkuMDQzQzE2OS4wNDMgOTQuMTEwOSAxNjYuNjE1IDg4Ljc2NjUgMTYyLjI4NSA4NS4wMjM3QzE1Ny45NjEgODEuMjg2OCAxNTEuNzgyIDc5LjE4MDIgMTQ0LjMyNiA3OS4xODAyVjgwLjE4MDJaTTE2OC4wNDMgMTAwLjQ5MUMxNjguMDQzIDEwNC44MjEgMTY2Ljg3OCAxMDguMDUyIDE2NS4xNDQgMTEwLjYyMkMxNjMuNDAzIDExMy4yMDIgMTYxLjA3MyAxMTUuMTM5IDE1OC43IDExNi44NTdDMTU2LjM1NiAxMTguNTUzIDE1My45MDggMTIwLjA3NSAxNTIuMDg4IDEyMS43NTZDMTUwLjI0MyAxMjMuNDYgMTQ4Ljk0MyAxMjUuNDEzIDE0OC45NDMgMTI4LjAzN0gxNDkuOTQzQzE0OS45NDMgMTI1LjggMTUxLjAzIDEyNC4wOTQgMTUyLjc2NyAxMjIuNDlDMTU0LjUyOSAxMjAuODYzIDE1Ni44NTUgMTE5LjQyNyAxNTkuMjg2IDExNy42NjdDMTYxLjY4OCAxMTUuOTI4IDE2NC4xMzMgMTEzLjkwOCAxNjUuOTczIDExMS4xODFDMTY3LjgyIDEwOC40NDUgMTY5LjA0MyAxMDUuMDE4IDE2OS4wNDMgMTAwLjQ5MUgxNjguMDQzWk0xNDguOTQzIDEyOC4wMzdWMTI5Ljk1SDE0OS45NDNWMTI4LjAzN0gxNDguOTQzWk0xNDguOTQ3IDEzMC4wMTFDMTQ4Ljk4OSAxMzAuMzU3IDE0OC44NyAxMzAuNzAzIDE0OC42MjMgMTMwLjk1TDE0OS4zMyAxMzEuNjU3QzE0OS43OTUgMTMxLjE5MyAxNTAuMDE5IDEzMC41NCAxNDkuOTM5IDEyOS44ODlMMTQ4Ljk0NyAxMzAuMDExWk0xNDguNjIzIDEzMC45NUMxNDguMzc3IDEzMS4xOTYgMTQ4LjAzIDEzMS4zMTYgMTQ3LjY4NCAxMzEuMjczTDE0Ny41NjIgMTMyLjI2NkMxNDguMjE0IDEzMi4zNDYgMTQ4Ljg2NiAxMzIuMTIxIDE0OS4zMyAxMzEuNjU3TDE0OC42MjMgMTMwLjk1Wk0xNDcuNjIzIDEzMS4yNjlIMTM2LjMzMVYxMzIuMjY5SDE0Ny42MjNWMTMxLjI2OVpNMTM2LjI4IDEzMS4yNzJDMTM1LjkzNyAxMzEuMzA3IDEzNS41OTcgMTMxLjE4NSAxMzUuMzU2IDEzMC45MzlMMTM0LjY0MyAxMzEuNjRDMTM1LjA5NyAxMzIuMTAzIDEzNS43MzcgMTMyLjMzMyAxMzYuMzgyIDEzMi4yNjdMMTM2LjI4IDEzMS4yNzJaTTEzNS4zNTYgMTMwLjkzOUMxMzUuMTE0IDEzMC42OTQgMTM0Ljk5OCAxMzAuMzUxIDEzNS4wMzkgMTMwLjAwOUwxMzQuMDQ2IDEyOS44OUMxMzMuOTY5IDEzMC41MzQgMTM0LjE4OCAxMzEuMTc4IDEzNC42NDMgMTMxLjY0TDEzNS4zNTYgMTMwLjkzOVpNMTM0LjA3NyAxNDcuMTAzQzEzMy44NDIgMTQzLjU1OCAxMzUuNzk5IDE0MC4yMyAxMzkuMDExIDEzOC43MTNMMTM4LjU4NCAxMzcuODA5QzEzNSAxMzkuNTAyIDEzMi44MTcgMTQzLjIxNSAxMzMuMDc5IDE0Ny4xN0wxMzQuMDc3IDE0Ny4xMDNaTTEzOS4wMTEgMTM4LjcxM0MxNDIuMjIzIDEzNy4xOTUgMTQ2LjAzNyAxMzcuNzk3IDE0OC42MjUgMTQwLjIzMUwxNDkuMzEgMTM5LjUwMkMxNDYuNDIyIDEzNi43ODcgMTQyLjE2OCAxMzYuMTE2IDEzOC41ODQgMTM3LjgwOUwxMzkuMDExIDEzOC43MTNaTTE0OC42MjUgMTQwLjIzMUMxNTEuMjE0IDE0Mi42NjQgMTUyLjA1IDE0Ni40MzMgMTUwLjczNCAxNDkuNzMzTDE1MS42NjMgMTUwLjEwNEMxNTMuMTMxIDE0Ni40MjIgMTUyLjE5OCAxNDIuMjE3IDE0OS4zMSAxMzkuNTAyTDE0OC42MjUgMTQwLjIzMVpNMTUwLjczNCAxNDkuNzMzQzE0OS40MTggMTUzLjAzMyAxNDYuMjE3IDE1NS4xOTIgMTQyLjY2NCAxNTUuMTc1TDE0Mi42NTkgMTU2LjE3NUMxNDYuNjIzIDE1Ni4xOTQgMTUwLjE5NCAxNTMuNzg1IDE1MS42NjMgMTUwLjEwNEwxNTAuNzM0IDE0OS43MzNaTTE0Mi42NDYgMTU1LjE3NkMxMzguMDQ3IDE1NS4zMjQgMTM0LjE5OCAxNTEuNzE4IDEzNC4wNDcgMTQ3LjEyTDEzMy4wNDcgMTQ3LjE1M0MxMzMuMjE3IDE1Mi4zMDMgMTM3LjUyOCAxNTYuMzQxIDE0Mi42Nzgg MTU2LjE3NUwxNDIuNjQ2IDE1NS4xNzZaTTEzMy41NDcgMTQ3LjYzN0gxMzMuNTc4VjE0Ni42MzdIMTMzLjU0N1YxNDcuNjM3WiIgZmlsbD0iIzI2MzIzOCIvPgo8L3N2Zz4K");
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
        `}
      </style>
    </div>
  );
}