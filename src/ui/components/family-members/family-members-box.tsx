import DeleteIcon from '@mui/icons-material/Delete';

type Data = {
  personalDetails: object;
  edit: boolean;
  handleFamilyMemberRemove: () => void;
}

export default function Home(props: Data) {

  return (
    props?.personalDetails?.family_members?.map((elem: object) => {
      return (
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <div className="familyDetailBox">
            {props?.edit === true ?
              <div className="d-flex justify-content-end">
                <DeleteIcon onClick={() => props?.handleFamilyMemberRemove(elem?.id)} style={{color: "red"}} />
              </div>
              :
              null
            }
            <div className="relation elip-text" title={elem?.relation}>
              {elem?.relation}
            </div>
            <div className="name elip-text" title={`${elem?.first_name} ${elem?.last_name}`}>
              {elem?.first_name}&nbsp;{elem?.last_name}
            </div>
            <div className="elip-text" title={elem?.phone_no}>
              {elem?.phone_no}
            </div>
            <div className="elip-text" title={elem?.email}>
              {elem?.email}
            </div>
            <div className="elip-text" title={elem?.address}>
              {elem?.address}
            </div>
          </div>
        </div>
      )
    })
  );
}
