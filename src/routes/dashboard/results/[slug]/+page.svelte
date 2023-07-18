<script lang="ts">
  import { A, Heading, P, Input, Label, Button, Textarea, Select } from 'flowbite-svelte';
  import { onMount } from 'svelte';

  export let data
  $: ({ resultData, userData } = data)
</script>

<svelte:head>
  <title>Detail Hasil Ujian Peserta {userData.id}</title>
</svelte:head>

<form class="ml-10 w-3/4">
  <A class="mb-3 mt-6" href="/dashboard/results"><P color="blue">Kembali ke dashboard hasil ujian</P></A>
  <Heading tag="h3" class="mb-6">Detail Hasil Ujian Peserta No {userData.id}</Heading>
  <Heading tag="h4" class="mb-6">Detail Peserta</Heading>
  <div class="grid mb-6">
    <div class="mb-6">
      <Label for="nama" class="mb-2">Nama Peserta</Label>
      <Input id="nama" disabled>{userData.first_name}</Input>
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
  <div class="grid mb-6">
    <div class="mb-6">
      <Label for="penyelesaian_admin" class="mb-2">Penyelesaian Administrasi</Label>
      <Input id="penyelesaian_admin" disabled>{resultData.administration_done}</Input>
    </div>
    <div class="mb-6">
      <Label for="hasil_admin" class="mb-2">Hasil Administrasi</Label>
      <Input id="hasil_admin"  disabled>{resultData.administration_result}</Input>
    </div>
    <div class="mb-6">
      <Label for="penyelesaian_ujian" class="mb-2">Penyelesaian Ujian</Label>
      <Input id="penyelesaian_ujian"  disabled>{resultData.exam_done}</Input>
    </div>
    <div class="mb-6">
      <Label for="hasil_ujian" class="mb-2">Hasil Ujian</Label>
      <Input id="hasil_ujian" disabled>{resultData.exam_result}</Input>
    </div>
    <div class="mb-6">
      <Label for="hasil_wawancara" class="mb-2">Hasil Wawancara</Label>
      <Input id="hasil_wawancara" disabled>{resultData.interview_result}</Input>
    </div>
  </div>
</form>