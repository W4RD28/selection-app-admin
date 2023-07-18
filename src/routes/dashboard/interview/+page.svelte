<script lang="ts">
  import { Button, ButtonGroup, Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  export let data
  $: ({ interviewData } = data)
  async function getUserInterviewResult(user_id) {
    const { data: result, error } = await data.supabase
      .from('test_results')
      .select('*')
      .eq('user_id', user_id)
      .single()
    if (error) console.log(error)
    else return result
  }
</script>

<svelte:head>
  <title>Dashboard Wawancara</title>
</svelte:head>

<div class="ml-10 mt-5 w-3/4">
  <Heading tag="h3" class="mb-6">Dashboard Wawancara</Heading>
  <Table tiled={true}>
    <TableHead>
      <TableHeadCell>Nomor Peserta</TableHeadCell>
      <TableHeadCell>Link Ruangan</TableHeadCell>
      <TableBodyCell>Tanggal</TableBodyCell>
      <TableHeadCell>Waktu</TableHeadCell>
      <TableHeadCell>Kelulusan</TableHeadCell>
      <TableHeadCell>Aksi</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      {#each interviewData as item}
      <TableBodyRow>
        <TableBodyCell>{item.user_id}</TableBodyCell>
        <TableBodyCell class="max-w-sm">{item.room_link}</TableBodyCell>
        <TableBodyCell>{item.date}</TableBodyCell>
        <TableBodyCell>{item.time}</TableBodyCell>
        {#await getUserInterviewResult(item.user_id)}
        <TableBodyCell>Mengambil...</TableBodyCell>
        {:then userResults}
        {#if !userResults}
        <TableBodyCell>Tidak Ada</TableBodyCell>
        {:else if userResults.interview_result}
        <TableBodyCell>{userResults?.interview_result}</TableBodyCell>
        {:else}
        <TableBodyCell>Belum Ada</TableBodyCell>
        {/if}
        {/await}
        <TableBodyCell><ButtonGroup>
          <Button color="blue" href="/dashboard/interview/{item.id}" target="_blank">Detail</Button>
        </ButtonGroup></TableBodyCell>
      </TableBodyRow>
      {/each}
      <TableBodyRow>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell><Button href="/dashboard/interview/create">Tambahkan Wawancara</Button></TableBodyCell>
      </TableBodyRow>
    </TableBody>
    </Table>
    </div>