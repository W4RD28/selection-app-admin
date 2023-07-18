<script lang="ts">
  import { Button, ButtonGroup, Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  export let data
  $: ({ questionData } = data)
</script>

<svelte:head>
  <title>Dashboard Pertanyaan</title>
</svelte:head>

<div class="ml-10 mt-5 w-3/4">
  <Heading tag="h3" class="mb-6">Dashboard Pertanyaan</Heading>
  <Table tiled={true} divClass="w-3/4">
    <TableHead>
      <TableHeadCell>Nomor</TableHeadCell>
      <TableHeadCell>Soal</TableHeadCell>
      <TableHeadCell>Jawaban</TableHeadCell>
      <TableHeadCell>Aksi</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      {#each questionData as item}
      <TableBodyRow>
        <TableBodyCell>{item.id}</TableBodyCell>
        <TableBodyCell class="max-w-sm">{item.question.slice(0,50) + "..."}</TableBodyCell>
        <TableBodyCell>{item.answer}</TableBodyCell>
        <TableBodyCell><ButtonGroup>
          <Button color="blue" href="/dashboard/questions/{item.id}" target="_blank">Edit</Button>
          <Button color="red">Hapus</Button>
        </ButtonGroup></TableBodyCell>
      </TableBodyRow>
      {/each}
      <TableBodyRow>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell><Button href="/dashboard/questions/create">Tambahkan Pertanyaan</Button></TableBodyCell>
      </TableBodyRow>
    </TableBody>
    </Table>
</div>

