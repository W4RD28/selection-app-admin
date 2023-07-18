<script lang="ts">
  import { A, Heading, P, Input, Label, Button, ButtonGroup, Textarea, Select, Table, TableBody, TableHead, TableHeadCell, TableBodyCell, TableBodyRow } from 'flowbite-svelte';
  export let data
  $: ({ resultData, userData, userScore, answerData } = data)

  async function passTest() {
    await data.supabase
      .from('test_results')
      .update(
        {
          exam_result: "lulus"
        }
      )
      .eq('id', resultData.id)
  }
  async function failTest() {
    await data.supabase
      .from('test_results')
      .update(
        {
          exam_result: "tidak lulus"
        }
      )
      .eq('id', resultData.id)
  }
</script>

<svelte:head>
  <title>Detail Hasil Ujian Peserta {userData.id}</title>
</svelte:head>

<form>
  <div class="ml-10 mt-5 w-3/4">
    <A class="mb-3 mt-6" href="/dashboard/results"><P color="blue">Kembali ke dashboard hasil ujian</P></A>
    <Heading tag="h3" class="mb-6">Detail Hasil Ujian Peserta No {userData.id}</Heading>
    <Heading tag="h4" class="mb-6">Detail Peserta</Heading>
    <div class="grid mb-6">
      <div class="mb-6">
        <Label for="nama" class="mb-2">Nama Peserta</Label>
        <Input id="nama" disabled>{userData.first_name + " " + userData.last_name}</Input>
      </div>
      <div class="mb-6">
        <Label for="bootcamp" class="mb-2">Bootcamp</Label>
        <Input id="bootcamp" disabled>{userData.course}</Input>
      </div>
      <div class="mb-6">
        <Label for="asal" class="mb-2">Asal</Label>
        <Input id="asal" disabled>{userData.kelurahan + ", " + userData.kecamatan + ", " + userData.kota}</Input>
      </div>
      <!-- Button to Look user detail -->
      <div class="mb-6">
        <Button href="/dashboard/users/{userData.id}" target="_blank">Lihat detail pengguna</Button>
      </div>  
  </div>
  <Heading tag="h4" class="mb-6">Detail Hasil Ujian</Heading>
  <!-- Use Table side by side for user answers and question answers by number -->
  <Table class="mb-6">
    <TableHead>
      <TableHeadCell>No</TableHeadCell>
      <TableHeadCell>Pertanyaan</TableHeadCell>
      <TableHeadCell>Jawaban Peserta</TableHeadCell>
      <TableHeadCell>Jawaban Benar</TableHeadCell>
    </TableHead>
    <TableBody>
      {#each answerData as item}
      <TableBodyRow>
        <TableBodyCell>{item.question_id}</TableBodyCell>
        <TableBodyCell>{item.question.question.slice(0,20) + "..."}</TableBodyCell>
        <TableBodyCell>{item.answer}</TableBodyCell>
        <TableBodyCell>{item.question.answer}</TableBodyCell>
      </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
  <div class="mb-6">
    <Label for="nilai_ujian" class="mb-2">Nilai Ujian</Label>
    <Input id="nilai_ujian" disabled>{Math.round(userScore)}</Input>
  </div>
  <div class="mb-6">
    <Label for="hasil_ujian" class="mb-2">Hasil Ujian</Label>
    <Input id="hasil_ujian" disabled>{resultData.exam_result}</Input>
  </div>
  <!-- Buttons for passing and failing test-->
  <div class="mb-6">
    <ButtonGroup>
      <Button color="blue" on:click={passTest}>Lulus</Button>
      <Button color="red" on:click={failTest}>Tidak Lulus</Button>
    </ButtonGroup>
  </div>
</form>