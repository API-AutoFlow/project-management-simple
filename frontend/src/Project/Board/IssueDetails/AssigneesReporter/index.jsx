import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Avatar, Select, Icon } from 'shared/components';

import { SectionTitle } from '../Styles';
import { User, Username } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
  projectUsers: PropTypes.array.isRequired,
};

const ProjectBoardIssueDetailsAssigneesReporter = ({ issue, updateIssue, projectUsers }) => {
  // eslint-disable-next-line eqeqeq
  const getUserById = userId => projectUsers.find(user => user.id == userId);

  const userOptions = projectUsers.map(user => ({
    value: user.id,
    label: `${user.first_name} ${user.last_name}`,
  }));

  const value = issue.user_id ? issue.user_id.split(',') : [];

  return (
    <Fragment>
      <SectionTitle>Assignees</SectionTitle>
      <Select
        isMulti
        variant="empty"
        dropdownWidth={343}
        placeholder="Unassigned"
        name="assignees"
        value={value}
        options={userOptions}
        onChange={userIds => {
          updateIssue({ userIds, users: userIds.map(getUserById) });
        }}
        renderValue={({ value: userId, removeOptionValue }) =>
          getUserById(userId) === undefined
            ? ''
            : renderUser(getUserById(userId), true, removeOptionValue)
        }
        renderOption={({ value: userId }) =>
          getUserById(userId) === undefined ? '' : renderUser(getUserById(userId), false)
        }
      />

      <SectionTitle>Reporter</SectionTitle>
      <Select
        variant="empty"
        dropdownWidth={343}
        withClearValue={false}
        name="reporter"
        value={issue.writer}
        options={userOptions}
        onChange={userId => updateIssue({ reporterId: userId })}
        renderValue={({ value: userId }) =>
          getUserById(userId) === undefined ? '' : renderUser(getUserById(userId), true)
        }
        renderOption={({ value: userId }) =>
          getUserById(userId) === undefined ? '' : renderUser(getUserById(userId))
        }
      />
    </Fragment>
  );
};

const renderUser = (user, isSelectValue, removeOptionValue) => (
  <User
    key={user.id}
    isSelectValue={isSelectValue}
    withBottomMargin={!!removeOptionValue}
    onClick={() => removeOptionValue && removeOptionValue()}
  >
    <Avatar avatarUrl={user.profile_image} name={user.first_name} size={24} />
    <Username>{`${user.first_name} ${user.last_name}`}</Username>
    {removeOptionValue && <Icon type="close" top={1} />}
  </User>
);

ProjectBoardIssueDetailsAssigneesReporter.propTypes = propTypes;

export default ProjectBoardIssueDetailsAssigneesReporter;
