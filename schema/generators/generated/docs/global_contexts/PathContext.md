# PathContext
A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing the path where the user is when an event is sent.

### Properties
`string` id: A unique string identifier to be combined with the Context Type (`_type`) 
for Context instance uniqueness.
`discriminator` _type: A string literal used during serialization. Should always match the Context interface name.

:::info setting of the id & type
The tracker will automatically set the `id` and `_type` based on path on web (including URL parameters, hashes) and pathname on native. When this is not possible on a specific platform, it will ask for a manual `id` and `_type` to be set.
:::