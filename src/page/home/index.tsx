import React, { useEffect } from 'react';
import { Chart, Axis, LineAdvance } from 'bizcharts';
import { format } from 'date-fns';
import { Flex, Box, Stack, Button, Text } from '@chakra-ui/react';

// ACTION
import { getCoinData } from 'redux/coin/action';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { changePeriod } from 'redux/app/actions';

// SELECTOR
import { selectCoinData } from 'redux/coin/selector';
import { selectAppPeriod } from 'redux/app/selector';

// DATA
import { period } from 'constant/data';

function Home() {
  const dispatch = useAppDispatch();
  const coinData = useAppSelector(selectCoinData);
  const currentPeriod = useAppSelector(selectAppPeriod);

  useEffect(() => {
    dispatch(getCoinData());
  }, [currentPeriod]);

  const handleChangePeriodResolution = (value: any) => {
    dispatch(changePeriod(value));
  };

  return (
    <>
      <Flex justifyContent="space-between" paddingRight={10} paddingLeft={10} paddingBottom={100}>
        <Text fontWeight="bold" fontSize="3xl">
          BTC / USDT
        </Text>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Stack direction={['column', 'row']} spacing="10px">
            {period.map((v) => (
              <Button
                onClick={() => handleChangePeriodResolution(v.value)}
                key={v.id}
                variant={v.value === currentPeriod ? 'outline' : 'solid'}
              >
                {v.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Flex>
      <Chart scale={{ value: { min: 0 } }} padding={[10, 20, 50, 40]} autoFit height={500} data={coinData}>
        <Axis name="date" label={{ formatter: (val) => format(new Date(Number(val) * 1000), 'yyyy-MM-dd hh:mm:ss') }} />
        <LineAdvance
          shape="smooth"
          area
          position="date*open"
          color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
        />
      </Chart>
    </>
  );
}

export default Home;
