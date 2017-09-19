import _ from 'lodash';

export const orderBy = (data) => {
  return _.orderBy(data, (e) => e.retweeted_status.favorite_count, ['desc']).slice(0, 12);
}
