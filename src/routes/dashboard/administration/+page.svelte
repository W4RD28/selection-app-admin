<script lang="ts">
  import { Button, ButtonGroup, Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  export let data
  $: ({ administrationData } = data)

  async function getUserAdministrationDoneAndResult(id: any) {
    const { data: resultData } = await data
      .supabase
      .from('test_results')
      .select('administration_done, administration_result')
      .eq('user_id', id)
      .single()

    return resultData
  }
</script>

<svelte:head>
  <title>Dashboard Administrasi</title>
</svelte:head>

<div class="ml-10 mt-5 w-3/4">
  <Heading tag="h3" class="mb-6">Dashboard Administrasi</Heading>
  <Table tiled={true}>
    <TableHead>
      <TableHeadCell>ID Peserta</TableHeadCell>
      <TableHeadCell>Nama Peserta</TableHeadCell>
      <TableHeadCell>Asal</TableHeadCell>
      <TableHeadCell>Bootcamp</TableHeadCell>
      <TableHeadCell>Status</TableHeadCell>
      <TableHeadCell>Selesai?</TableHeadCell>
      <TableHeadCell>Lulus?</TableHeadCell>
      <TableHeadCell>Aksi</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      {#each administrationData as item}
      <TableBodyRow>
        <TableBodyCell>{item.user.id}</TableBodyCell>
        <TableBodyCell>{item.user.first_name + " " + item.user.last_name}</TableBodyCell>
        <TableBodyCell>{item.user.kelurahan + ", " + item.user.kecamatan + ", " + item.user.kota}</TableBodyCell>
        <TableBodyCell>{item.user.course}</TableBodyCell>
        <TableBodyCell>{item.user.status}</TableBodyCell>
        {#await getUserAdministrationDoneAndResult(item.user.id)}
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        {:then userIsDone}
        <TableBodyCell>{userIsDone?.administration_done}</TableBodyCell>
        <TableBodyCell>{userIsDone?.administration_result}</TableBodyCell>
        {/await}
        <TableBodyCell><Button color="blue" href="/dashboard/administration/{item.id}" target="_blank">Detail</Button></TableBodyCell>
      </TableBodyRow>
      {/each}
    </TableBody>
    </Table>
</div>
