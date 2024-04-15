import { Text, Box, Grid, Heading, Stack, HStack, Progress } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { LineChart } from './Chart';

const DataBox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    p="8"
    borderRadius={'lg'}
  >
    <Text children={title} />
    <HStack spacing={'6'}>
      <Text children={qty} fontSize={'2xl'} fontWeight={'bold'} />
      <HStack>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text children={'Since Last Month'} opacity={0.6} />
  </Box>
);

const Bar = ({ title, value }) => (
  <Box py="4" px={['0', '20']}>
    <Heading children={title} size="sm" mb="2" />
    <HStack w="full" alignItems={'center'}>
      <Text children={`${value}%`} />
      <Progress w="full" value={value} colorScheme="purple" />
    </HStack>
  </Box>
);

const AdminDashboard = () => {
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box boxSizing='border-box' py="16" px={["4","0"]}>
        <Text
          textAlign={"center"}
          opacity={0.5}
          children={`Last change was on ${String(new Date()).split('G')[0]}`}
        />

        <Heading
          children="Dashboard"
          ml={['0','16']}
          mb="16"
          textAlign={['center','left']}
        />

        <Stack direction={['column','row']} minH="24" justifyContent={'space-evenly'}>
          <DataBox title='Views' qty={123} qtyPercentage={30} profit={true}/>
          <DataBox title='Users' qty={123} qtyPercentage={30} profit={true}/>
        </Stack>

        <Box
          m={['0','16']}
          borderRadius='lg'
          p={['0','16']}
          mt={['4','16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
          <Heading
            textAlign={['center','left']}
            size='md'
            children="View Graph"
            pt={['8','0']}
            ml={['0','16']}
          />

          <LineChart />
        </Box>

        <Grid templateColumns={['1fr','2fr 1fr']}>
            <Box>
                <Heading 
                textAlign= {['center','left']}
                size='md'
                children='Progress Bar'
                my='8'
                ml={['0','16']}/>
                <Box>
                    <Bar title="Views" value={30}/>
                    <Bar title="Users" value={78}/>
                </Box>
            </Box>
        </Grid>
      </Box>

      <Sidebar />
    </Grid>
  )
}

export default AdminDashboard;
