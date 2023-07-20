<script lang="ts">
  // import table
  import { Button, ButtonGroup, Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  export let data
  $: ({ questionData, usersData } = data)

  async function getUserAnswers (user_id) {
    const { data: user_answers, error } = await data.supabase
      .from('user_answers')
      .select('*')
      .eq('user_id', user_id)
    if (error) console.log(error)
    else return user_answers
  }
  async function getUserScore (user_id) {
    let userScore = 0
    const user_answers = await getUserAnswers(user_id)
    for (let i = 0; i < user_answers.length; i++) {
      if (user_answers[i].answer === questionData[i].answer) {
        userScore++
      }
    }
    return userScore / questionData.length * 100
  }
  async function getUserResults(user_id) {
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
  <title>Dashboard Hasil Ujian Tertulis</title>
</svelte:head>

<div class="ml-10 mt-5 w-3/4">
  <Heading tag="h3" class="mb-6">Dashboard Hasil Ujian Tertulis</Heading>
  <Table tiled={true} divClass="w-3/4">
    <TableHead>
      <TableHeadCell>Nomor Peserta</TableHeadCell>
      <TableHeadCell>Nilai</TableHeadCell>
      <TableHeadCell>Hasil Ujian</TableHeadCell>
      <TableHeadCell>Aksi</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      {#each usersData as item}
      <TableBodyRow>
        <TableBodyCell>{item.id}</TableBodyCell>
        {#await getUserScore(item.id)}
        <TableBodyCell>Menghitung...</TableBodyCell>
        {:then userScore}
        <TableBodyCell>{Math.round(userScore)}</TableBodyCell>
        {/await}
        {#await getUserResults(item.id)}
        <TableBodyCell>Mengambil...</TableBodyCell>
        {:then userResults}
        {#if !userResults}
        <TableBodyCell>Tidak Ada</TableBodyCell>
        {:else if userResults.exam_result === null}
        <TableBodyCell>Belum Ada</TableBodyCell>
        {:else}
        <TableBodyCell>{userResults.exam_result}</TableBodyCell>
        {/if}
        {/await}
        <TableBodyCell><ButtonGroup>
          <Button color="blue" href="/dashboard/exam-results/{item.id}" target="_blank">Detail</Button>
        </ButtonGroup></TableBodyCell>
      </TableBodyRow>
      {/each}
    </TableBody>
    </Table>
    </div>