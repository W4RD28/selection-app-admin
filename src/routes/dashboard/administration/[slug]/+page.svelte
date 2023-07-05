<script lang="ts">
  import { A, Heading, P, Input, Label, Button } from 'flowbite-svelte';

  export let data
  $: ({ administrationData, resultData } = data)


</script>

<svelte:head>
  <title>Jawaban Administrasi {administrationData?.user.id}</title>
</svelte:head>

<form class="ml-10 w-3/4">
  <A class="mb-3 mt-6" href="/dashboard/administration"><P color="blue">Kembali ke dashboard administrasi</P></A>
  <Heading tag="h3" class="mb-6">Detail Pengguna</Heading>
  <div class="grid gap-10 mb-6 md:grid-cols-2">
    <div class="mb-3">
      <Label for="nama_penuh" class="mb-2">Nama Penuh</Label>
      <Input type="text" id="nama_penuh" disabled>{administrationData.user.first_name + " " + administrationData.user.last_name}</Input>
    </div>
    <div class="mb-3">
      <Label for="asal" class="mb-2">Asal</Label>
      <Input type="text" id="asal" disabled>{administrationData.user.kelurahan + ", " + administrationData.user.kecamatan + ", " + administrationData.user.kota}</Input>
    </div>
    <div class="mb-3">
      <Label for="bootcamp" class="mb-2">Bootcamp</Label>
      <Input type="text" id="bootcamp" disabled>{administrationData.user.course}</Input>
    </div>
    <div class="mb-3">
      <Label for="status" class="mb-2">Status</Label>
      <Input type="text" id="status" disabled>{administrationData.user.status}</Input>
    </div>
    <div class="mb-3">
      <Button href="/dashboard/users/{administrationData.user.id}" target="_blank">Lihat detail pengguna</Button>
    </div>
  </div>
  <Heading tag="h3" class="mb-6">Jawaban Pengguna</Heading>
  <div class="grid gap-10 mb-6 grid-cols-2">
    <div class="mb-3">
      <Label for="kategori" class="mb-2">Kategori</Label>
      <Input type="text" id="kategori" disabled>{administrationData.category}</Input>
    </div>
    <div class="mb-3">
      <Label for="disabilitas" class="mb-2">Disabilitas</Label>
      <Input type="text" id="disabilitas" disabled>{administrationData.disability_type}</Input>
    </div>
    <div class="mb-3">
      <Label for="pendapatan" class="mb-2">Pendapatan</Label>
      <Input type="text" id="pendapatan" disabled>{administrationData.pendapatan}</Input>
    </div>
    <div class="mb-3">
      <Label for="alasan" class="mb-2">Alasan</Label>
      <Input type="text" id="alasan" disabled>{administrationData.alasan}</Input>
    </div>
    <div class="mb-3">
      <Label for="alasan" class="mb-2">Harapan</Label>
      <Input type="text" id="alasan" disabled>{administrationData.harapan}</Input>
    </div>
    <div class="mb-3">
      <Label for="akses_laptop" class="mb-2">Akses Laptop?</Label>
      <Input type="text" id="akses_laptop" disabled>{administrationData.akses_laptop}</Input>
    </div>
    <div class="mb-3">
      <Label for="dapat_mengikuti" class="mb-2">Dapat Mengikuti?</Label>
      <Input type="text" id="dapat_mengikuti" disabled>{administrationData.dapat_mengikuti}</Input>
    </div>
    <div class="mb-3">
    </div>
  </div>
  <div class="mb-3">
    <Label for="selesai" class="mb-2">Selesai Tes?</Label>
    <Input type="text" id="selesai" disabled>{resultData?.administration_done}</Input>
  </div>
  <div class="mb-6">
    <Label for="lulus" class="mb-2">Lulus?</Label>
    <Input type="text" id="lulus" disabled>{resultData?.administration_result}</Input>
  </div>
  <Button class="mb-3">Luluskan</Button>
  <Button class="mb-3">Jangan Luluskan</Button>
</form>