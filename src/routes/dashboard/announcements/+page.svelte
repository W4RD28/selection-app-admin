<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, A, Button, Heading, TableHead, TableHeadCell, ButtonGroup } from "flowbite-svelte"

  export let data
  $: ({ announcementsData } = data)

  async function deleteAnnouncement(id: any) {
    await data.supabase
      .from('announcement')
      .delete()
      .eq('id', id)
  }
</script>

<svelte:head>
  <title>Dashboard Pengumuman</title>
</svelte:head>

<div class="ml-10 mt-5 w-3/4">
  <Heading tag="h3" class="mb-6">Dashboard Pengumuman</Heading>
  <Table tiled={true}>
    <TableHead>
      <TableHeadCell>ID</TableHeadCell>
      <TableHeadCell>Judul</TableHeadCell>
      <TableHeadCell>Isi</TableHeadCell>
      <TableHeadCell>Tanggal</TableHeadCell>
      <TableHeadCell>Aksi</TableHeadCell>
    </TableHead>
    <TableBody>
      {#each announcementsData as announcement}
        <TableBodyRow>
          <TableBodyCell>{announcement.id}</TableBodyCell>
          <TableBodyCell>{announcement.title}</TableBodyCell>
          <TableBodyCell>{announcement.content.slice(0,50) + "..."}</TableBodyCell>
          <TableBodyCell>{new Date(announcement.created_at).toLocaleDateString('id-ID')}</TableBodyCell>
          <TableBodyCell>
            <ButtonGroup>
              <Button color="blue" target="_blank" href="/dashboard/announcements/{announcement.id}" >Edit</Button>
              <Button color="red" on:click={() => deleteAnnouncement(announcement.id)}>Hapus</Button>
            </ButtonGroup>
          </TableBodyCell>
        </TableBodyRow>
      {/each}
      <TableBodyRow>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell>
          <A href="/dashboard/announcements/create">
            <Button>Tambahkan Pengumuman</Button>
          </A>
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</div>