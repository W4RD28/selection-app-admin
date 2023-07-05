<script lang="ts">
    import { Button, ButtonGroup, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    
    export let data
    $: ({usersData } = data)

    const turnToAdmin = async (id: string) => {
      const { data: userData } = await data.supabase
        .from('users')
        .update({
          role: "admin"
        })
        .eq("id", id)
        .select()
      window.location.reload()  
    }
    const turnToUser = async (id: string) => {
      const { data: userData } = await data.supabase
        .from('users')
        .update({
          role: "user"
        })
        .eq("id", id)
        .select()
      window.location.reload()
    }
    const suspendUser = async (id: string) => {
      const { data: userData } = await data.supabase
        .from('users')
        .update({
          status: "suspended"
        })
        .eq("id", id)
        .select()
      window.location.reload()
    }
    const unsuspendUser = async (id: string) => {
      const { data: userData } = await data.supabase
        .from('users')
        .update({
          role: "active"
        })
        .eq("id", id)
        .select()
      window.location.reload()
    }
</script>

<Table tiled={true} divClass="w-3/4">
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Adalah admin?</TableHeadCell>
    <TableHeadCell>Nama</TableHeadCell>
    <TableHeadCell>Asal</TableHeadCell>
    <TableHeadCell>Tanggal Lahir</TableHeadCell>
    <TableHeadCell>Bootcamp</TableHeadCell>
    <TableHeadCell>Aktif?</TableHeadCell>
    <TableHeadCell>Aksi</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    {#each usersData as users}
    <TableBodyRow>
      <TableBodyCell>{users.id}</TableBodyCell>
      <TableBodyCell>{users.role}</TableBodyCell>
      <TableBodyCell>{users.first_name + " " + users.last_name}</TableBodyCell>
      {#if users.role == "admin"}
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell>{users.status}</TableBodyCell>
      <TableBodyCell><ButtonGroup>
        <Button color="blue" href="/dashboard/users/{users.id}">Detail</Button>
        <Button color="red" on:click={() => turnToUser(users.id)}>Jadikan Pengguna</Button>
        {#if users.status == "active"}
        <Button color="yellow" on:click={() => suspendUser(users.id)}>Nonaktifkan pengguna</Button>
        {:else if users.status == "suspended"}
        <Button color="yellow" on:click={() => unsuspendUser(users.id)}>Aktifkan pengguna</Button>
        {/if}
      </ButtonGroup>
      </TableBodyCell>
      {:else if users.role == "user"}
      <TableBodyCell>{users.kelurahan + ", " + users.kecamatan + ", " + users.kota}</TableBodyCell>
      <TableBodyCell>{users.birth_date}</TableBodyCell>
      <TableBodyCell>{users.course}</TableBodyCell>
      <TableBodyCell>{users.status}</TableBodyCell>
      <TableBodyCell><ButtonGroup>
        <Button color="blue" href="/dashboard/users/{users.id}" target="_blank">Detail</Button>
        <Button color="red" on:click={() => turnToAdmin(users.id)}>Jadikan Admin</Button>
        {#if users.status == "active"}
        <Button color="yellow" on:click={() => suspendUser(users.id)}>Nonaktifkan pengguna</Button>
        {:else if users.status == "suspended"}
        <Button color="yellow" on:click={() => unsuspendUser(users.id)}>Aktifkan pengguna</Button>
        {/if}
      </ButtonGroup>
      </TableBodyCell>
      {/if}
    </TableBodyRow>
    {/each}
  </TableBody>
</Table>