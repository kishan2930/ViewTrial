import React from 'react';
import {Text} from 'react-native';
import ListItem from './components/listItem/listItem';
// import httpService from '@utils/httpService';
// interface LocationResultItem {
//   id: string;
//   name: string;
//   [key: string]: any;
// }

const List: React.FC = () => {
  // const [locationData, setLocationData] = useState<LocationResultItem[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);

  // const fetchLocationData = async () => {
  //   try {
  //     setLoading(true);
  //     const result = await httpService.post<any>(
  //       '/api/pubui/mobile/location/unified-search',
  //       {
  //         searchText: 'richmond',
  //         scope: {
  //           excludeLocations: false,
  //           excludeStreets: false,
  //           excludeProperties: true,
  //           excludeProject: false,
  //           excludeSchool: false,
  //           locationScope: {
  //             excludeState: false,
  //             excludeCity: false,
  //             excludeLga: false,
  //             excludeRegion: false,
  //           },
  //         },
  //       },
  //       {
  //         'x-rev-apikey': '9594f5d7-be39-482d-aaa6-646dfffd8c15',
  //         'x-mob-app-version': '6.8.2',
  //       },
  //     );

  //     setLocationData(result?.data || []); // adjust based on actual response shape
  //   } catch (err) {

  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchLocationData();
  // }, []);

  return (
    <>
      <Text>List component</Text>
      <ListItem />
    </>
  );
};

export default List;

// const styles = StyleSheet.create({});
