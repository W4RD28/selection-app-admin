<script lang="ts">
  import { Button, ButtonGroup, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  export let data
  $: ({ questionData } = data)
</script>

<svelte:head>
  <title>Dashboard Pertanyaan</title>
</svelte:head>

<Table tiled={true} divClass="w-3/4">
  <TableHead>
    <TableHeadCell>Nomor</TableHeadCell>
    <TableHeadCell>Soal</TableHeadCell>
    <TableHeadCell>Pilihan A</TableHeadCell>
    <TableHeadCell>Pilihan B</TableHeadCell>
    <TableHeadCell>Pilihan C</TableHeadCell>
    <TableHeadCell>Pilihan D</TableHeadCell>
    <TableHeadCell>Jawaban</TableHeadCell>
    <TableHeadCell>Aksi</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    {#each questionData as item}
    <TableBodyRow>
      <TableBodyCell>{item.id}</TableBodyCell>
      <TableBodyCell class="max-w-sm">{item.question.slice(0,50) + "..."}</TableBodyCell>
      <TableBodyCell>{item.option_a.slice(0,30) + "..."}</TableBodyCell>
      <TableBodyCell>{item.option_b.slice(0,30) + "..."}</TableBodyCell>
      <TableBodyCell>{item.option_c.slice(0,30) + "..."}</TableBodyCell>
      <TableBodyCell>{item.option_d.slice(0,30) + "..."}</TableBodyCell>
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
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell></TableBodyCell>
      <TableBodyCell><Button>Tambahkan Pertanyaan</Button></TableBodyCell>
    </TableBodyRow>
  </TableBody>
  </Table>