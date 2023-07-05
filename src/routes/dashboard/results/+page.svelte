<script lang="ts">
  import { Button, ButtonGroup, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  export let data
  $: ({ resultsData } = data)
</script>

<svelte:head>
  <title>Hasil Seleksi Peserta</title>
</svelte:head>

<Table tiled={true} divClass="w-3/4">
<TableHead>
  <TableHeadCell>ID Peserta</TableHeadCell>
  <TableHeadCell>Nama Peserta</TableHeadCell>
  <TableHeadCell>Asal</TableHeadCell>
  <TableHeadCell>Bootcamp</TableHeadCell>
  <TableHeadCell>Status</TableHeadCell>
  <TableHeadCell>Pengerjaan Administrasi</TableHeadCell>
  <TableHeadCell>Kelulusan Administrasi</TableHeadCell>
  <TableHeadCell>Pengerjaan Ujian Tertulis</TableHeadCell>
  <TableHeadCell>Kelulusan Ujian Tertulis</TableHeadCell>
  <TableHeadCell>Pengerjaan Wawancara</TableHeadCell>
  <TableHeadCell>Kelulusan Wawancara</TableHeadCell>
  <TableHeadCell>Aksi</TableHeadCell>
</TableHead>
<TableBody class="divide-y">
  {#each resultsData as item}
  <TableBodyRow>
    <TableBodyCell>{item.user.id}</TableBodyCell>
    <TableBodyCell>{item.user.first_name + " " + item.user.last_name}</TableBodyCell>
    <TableBodyCell>{item.user.kelurahan + ", " + item.user.kecamatan + ", " + item.user.kota}</TableBodyCell>
    <TableBodyCell>{item.user.course}</TableBodyCell>
    <TableBodyCell>{item.user.status}</TableBodyCell>
    <TableBodyCell>{item?.administration_done}</TableBodyCell>
    <TableBodyCell>{item?.administration_result}</TableBodyCell>
    <TableBodyCell>{item?.exam_done}</TableBodyCell>
    <TableBodyCell>{item?.exam_result}</TableBodyCell>
    <TableBodyCell>{item?.interview_done}</TableBodyCell>
    <TableBodyCell>{item?.interview_result}</TableBodyCell>
    <TableBodyCell><Button color="red" href="/dashboard/results/{item.id}" target="_blank">Detail</Button></TableBodyCell>
  </TableBodyRow>
  {/each}
</TableBody>
</Table>